package com.copaco.randomquote.backend.service;

import com.copaco.randomquote.backend.dto.QuotableResponse;
import com.copaco.randomquote.backend.mapper.QuoteMapper;
import com.copaco.randomquote.backend.model.Quote;
import com.copaco.randomquote.backend.repository.QuoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

@Slf4j
@Component
public class QuotableFetchingStrategy implements QuoteFetchingStrategy {
    private final QuoteRepository<QuotableResponse> quoteRepository;
    private final QuoteMapper<QuotableResponse> quoteMapper;

    public QuotableFetchingStrategy(QuoteRepository<QuotableResponse> quoteRepository,
                                    QuoteMapper<QuotableResponse> quoteMapper) {
        this.quoteRepository = quoteRepository;
        this.quoteMapper = quoteMapper;
    }

    @Override
    public CompletableFuture<Quote> fetchQuote() {
        log.info("Fetching quote from Quotable");
        return this.quoteRepository
                .fetchQuote()
                .thenApply(this.quoteMapper::map);
    }
}




