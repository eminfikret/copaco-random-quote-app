package com.copaco.randomquote.backend.mapper;

import com.copaco.randomquote.backend.dto.QuoteGardenResponse;
import com.copaco.randomquote.backend.model.Quote;
import org.springframework.stereotype.Component;

@Component
public class QuoteGardenMapper implements QuoteMapper<QuoteGardenResponse> {
    @Override
    public Quote map(QuoteGardenResponse response) {
        return new Quote(response.getData().getQuoteText(), response.getData().getQuoteAuthor());
    }
}
