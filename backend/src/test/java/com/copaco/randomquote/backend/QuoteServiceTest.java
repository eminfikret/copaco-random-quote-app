package com.copaco.randomquote.backend;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import com.copaco.randomquote.backend.service.QuoteFetchingStrategy;
import com.copaco.randomquote.backend.service.QuoteService;
import com.copaco.randomquote.backend.service.QuoteServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Arrays;
import java.util.concurrent.CompletableFuture;

import com.copaco.randomquote.backend.model.Quote;

@ExtendWith(MockitoExtension.class)
class QuoteServiceTest {

    @Mock
    private QuoteFetchingStrategy fastStrategy;

    @Mock
    private QuoteFetchingStrategy slowStrategy;

    @Test
    void T1_shouldReturnQuoteFromFastestStrategyWhenMultipleStrategiesPresent() {
        Quote expectedQuote = new Quote("Life is about making an impact, not making an income.", "Kevin Kruse");

        CompletableFuture<Quote> fastFuture = CompletableFuture.completedFuture(expectedQuote);
        CompletableFuture<Quote> slowFuture = new CompletableFuture<>();
        when(this.fastStrategy.fetchQuote()).thenReturn(fastFuture);
        when(this.slowStrategy.fetchQuote()).thenReturn(slowFuture);

        QuoteService service = new QuoteServiceImpl(Arrays.asList(this.fastStrategy, this.slowStrategy));

        Quote result = service.getRandomQuote();

        assertNotNull(result);
        assertEquals(expectedQuote, result);
        verify(this.fastStrategy).fetchQuote();
        verify(this.slowStrategy).fetchQuote();
    }
}