package com.copaco.randomquote.backend.repository;

import java.util.concurrent.CompletableFuture;

public interface QuoteRepository<T> {
    CompletableFuture<T> fetchQuote();
}