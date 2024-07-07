package com.copaco.randomquote.backend.repository;

import com.copaco.randomquote.backend.dto.QuoteGardenResponse;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import java.util.concurrent.CompletableFuture;

@Repository
public class QuoteGardenRepository implements QuoteRepository<QuoteGardenResponse> {

    private final RestTemplate restTemplate;
    private static final String API_URL = "https://quote-garden.herokuapp.com/api/v3/quotes/random";

    public QuoteGardenRepository(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public CompletableFuture<QuoteGardenResponse> fetchQuote() {
        return CompletableFuture
                .supplyAsync(() -> this.restTemplate.getForObject(API_URL, QuoteGardenResponse.class));
    }
}