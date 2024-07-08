package com.copaco.randomquote.backend.mapper;

import com.copaco.randomquote.backend.dto.DummyJsonResponse;
import com.copaco.randomquote.backend.model.Quote;
import org.springframework.stereotype.Component;

@Component
public class DummyJsonMapper implements QuoteMapper<DummyJsonResponse> {
    @Override
    public Quote map(DummyJsonResponse response) {
        return new Quote(response.getQuote(), response.getAuthor());
    }
}
