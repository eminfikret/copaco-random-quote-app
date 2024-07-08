package com.copaco.randomquote.backend.service;

import com.copaco.randomquote.backend.dto.QuoteGardenResponse;
import com.copaco.randomquote.backend.mapper.QuoteMapper;
import com.copaco.randomquote.backend.model.Quote;
import com.copaco.randomquote.backend.repository.QuoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

@Slf4j
@Component
public class QuoteGardenFetchingStrategy implements QuoteFetchingStrategy {
    private final QuoteRepository<QuoteGardenResponse> quoteRepository;
    private final QuoteMapper<QuoteGardenResponse> quoteMapper;

    public QuoteGardenFetchingStrategy(QuoteRepository<QuoteGardenResponse> quoteRepository,
                                       QuoteMapper<QuoteGardenResponse> quoteMapper) {
        this.quoteRepository = quoteRepository;
        this.quoteMapper = quoteMapper;
    }

    @Override
    public CompletableFuture<Quote> fetchQuote() {
        log.info("Fetching quote from QuoteGarden");
        return this.quoteRepository
                .fetchQuote()
                .thenApply(this.quoteMapper::map);
    }
}
