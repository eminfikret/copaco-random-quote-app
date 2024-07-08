package com.copaco.randomquote.backend.service;

import com.copaco.randomquote.backend.model.Quote;

import java.util.concurrent.CompletableFuture;

public interface QuoteFetchingStrategy {
    CompletableFuture<Quote> fetchQuote();
}
