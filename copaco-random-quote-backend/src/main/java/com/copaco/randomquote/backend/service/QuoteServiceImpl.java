package com.copaco.randomquote.backend.service;

import com.copaco.randomquote.backend.exception.QuoteNotFoundException;
import com.copaco.randomquote.backend.model.Quote;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

@Service
public class QuoteServiceImpl implements QuoteService {
    private final List<QuoteFetchingStrategy> quoteFetchingStrategies;

    public QuoteServiceImpl(List<QuoteFetchingStrategy> quoteFetchingStrategies) {
        this.quoteFetchingStrategies = quoteFetchingStrategies;
    }

    @Override
    public Quote getRandomQuote() {
        List<CompletableFuture<Quote>> futures = this.quoteFetchingStrategies.stream()
                .map(QuoteFetchingStrategy::fetchQuote)
                .toList();

        try {
            return CompletableFuture.anyOf(futures.toArray(new CompletableFuture[0]))
                    .thenApply(result -> (Quote) result)
                    .thenApply(Optional::ofNullable)
                    .get()
                    .orElseThrow(() -> new QuoteNotFoundException("No quotes available from any repository"));
        } catch (InterruptedException | ExecutionException e) {
            throw new QuoteNotFoundException("No quotes available from any repository");
        }
    }
}
