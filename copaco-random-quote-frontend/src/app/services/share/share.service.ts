import { Injectable } from '@angular/core';
import {Quote} from "../../models/quote/quote.model";

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  share(quote: Quote, platform: string): void {
    const url = this.getShareUrl(quote, platform);
    if (url) {
      window.open(url, '_blank');
    } else {
      console.log('Unsupported platform:', platform);
    }
  }

  private getShareUrl(quote: Quote, platform: string): string | null {
    const text = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
    const currentUrl = encodeURIComponent(window.location.href);

    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&quote=${text}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${text}&summary=${text}`;
      default:
        return null;
    }
  }
}
