package com.copaco.randomquote.backend.mapper;

import com.copaco.randomquote.backend.model.Quote;

public interface QuoteMapper<T> {
    Quote map(T response);
}