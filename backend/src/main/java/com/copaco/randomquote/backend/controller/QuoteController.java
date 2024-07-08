package com.copaco.randomquote.backend.controller;

import com.copaco.randomquote.backend.dto.QuoteDto;
import com.copaco.randomquote.backend.model.Quote;
import com.copaco.randomquote.backend.service.QuoteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/quotes")
public class QuoteController {

    private final QuoteService quoteService;

    public QuoteController(QuoteService quoteService) {
        this.quoteService = quoteService;
    }

    @GetMapping("/random")
    public QuoteDto getRandomQuote() {
        Quote quote = this.quoteService.getRandomQuote();
        return new QuoteDto(quote.getText(), quote.getAuthor());
    }
}