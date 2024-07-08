package com.copaco.randomquote.backend.dto;

import lombok.Data;

@Data
public class QuoteGardenResponse {
    private Data data;

    @lombok.Data
    public static class Data {
        private String quoteText;
        private String quoteAuthor;
    }
}
