package com.copaco.randomquote.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.mockito.BDDMockito.given;

import com.copaco.randomquote.backend.model.Quote;
import com.copaco.randomquote.backend.service.QuoteService;
import com.copaco.randomquote.backend.controller.QuoteController;

@WebMvcTest(QuoteController.class)
public class QuoteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private QuoteService quoteService;

    @Test
    public void T2_shouldReturnRandomQuoteWithStatusOk() throws Exception {
        Quote mockQuote = new Quote("Life is beautiful", "Anonymous");
        given(this.quoteService.getRandomQuote()).willReturn(mockQuote);

        this.mockMvc.perform(get("/api/v1/quotes/random"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.text").value("Life is beautiful"))
                .andExpect(jsonPath("$.author").value("Anonymous"));
    }
}
