package com.copaco.randomquote.backend.repository;

import com.copaco.randomquote.backend.dto.QuotableResponse;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import java.util.concurrent.CompletableFuture;

@Repository
public class QuotableRepository implements QuoteRepository<QuotableResponse> {

    private final RestTemplate restTemplate;
    private static final String API_URL = "https://api.quotable.io/random";

    public QuotableRepository(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public CompletableFuture<QuotableResponse> fetchQuote() {
        return CompletableFuture
                .supplyAsync(() -> this.restTemplate.getForObject(API_URL, QuotableResponse.class));
    }
}
