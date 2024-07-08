package com.copaco.randomquote.backend.config;

import com.copaco.randomquote.backend.service.QuoteFetchingStrategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class QuoteConfig {
    @Bean
    public List<QuoteFetchingStrategy> quoteFetchingStrategies(
            QuoteFetchingStrategy quotableFetchingStrategy,
            QuoteFetchingStrategy quoteGardenFetchingStrategy) {
        return List.of(quotableFetchingStrategy, quoteGardenFetchingStrategy);
    }
}