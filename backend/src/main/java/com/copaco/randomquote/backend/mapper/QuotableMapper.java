package com.copaco.randomquote.backend.mapper;

import com.copaco.randomquote.backend.dto.QuotableResponse;
import com.copaco.randomquote.backend.model.Quote;
import org.springframework.stereotype.Component;

@Component
public class QuotableMapper implements QuoteMapper<QuotableResponse> {
    @Override
    public Quote map(QuotableResponse response) {
        return new Quote(response.getContent(), response.getAuthor());
    }
}
