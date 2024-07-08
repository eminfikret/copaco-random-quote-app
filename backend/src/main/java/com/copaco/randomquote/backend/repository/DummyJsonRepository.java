package com.copaco.randomquote.backend.repository;

import com.copaco.randomquote.backend.dto.DummyJsonResponse;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import java.util.concurrent.CompletableFuture;

@Repository
public class DummyJsonRepository implements QuoteRepository<DummyJsonResponse> {

    private final RestTemplate restTemplate;
    private static final String API_URL = "https://dummyjson.com/quotes/random";

    public DummyJsonRepository(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public CompletableFuture<DummyJsonResponse> fetchQuote() {
        return CompletableFuture.supplyAsync(() -> this.restTemplate.getForObject(API_URL, DummyJsonResponse.class));
    }
}
