package com.copaco.randomquote.backend.service;

import com.copaco.randomquote.backend.dto.DummyJsonResponse;
import com.copaco.randomquote.backend.mapper.QuoteMapper;
import com.copaco.randomquote.backend.model.Quote;
import com.copaco.randomquote.backend.repository.QuoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

@Slf4j
@Component
public class DummyJsonFetchingStrategy implements QuoteFetchingStrategy {

    private final QuoteRepository<DummyJsonResponse> quoteRepository;
    private final QuoteMapper<DummyJsonResponse> quoteMapper;

    public DummyJsonFetchingStrategy(QuoteRepository<DummyJsonResponse> quoteRepository,
                                     QuoteMapper<DummyJsonResponse> quoteMapper) {
        this.quoteRepository = quoteRepository;
        this.quoteMapper = quoteMapper;
    }

    @Override
    public CompletableFuture<Quote> fetchQuote() {
        log.info("Fetching quote from DummyJson");
        return this.quoteRepository.
                fetchQuote()
                .thenApply(this.quoteMapper::map);
    }
}