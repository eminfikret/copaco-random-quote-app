package com.copaco.randomquote.backend.dto;

import lombok.Data;

@Data
public class QuotableResponse {
    private String content;
    private String author;
}
