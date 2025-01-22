import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit{
  products = [
    {
      image: 'assets/images/product2.jpg',
      icon: 'assets/images/DottedTriangleArrow.svg',
      category: 'Ebook',
      title: "The QA Lead's Guide to Agile Testing",
      description:
        'Many QA teams are already utilizing Agile or an Agile-like scrum methodology, yet still struggle to find the balance...'
    },
    {
      image: 'assets/images/product3.jpeg',
      icon: 'assets/images/DottedTriangleArrow.svg',
      category: 'Report',
      title: 'Software Testing & Quality Report: Third Edition',
      description:
        'Hear from over 4,000 QA teams on their successes, challenges, processes, and the state of QA in 2024 and beyond...'
    },
    {
      image: 'assets/images/product1.jpg',
      icon: 'assets/images/DottedTriangleArrow.svg',
      category: 'On-Demand Webinar',
      title: 'Testing in Regulated Industries',
      description:
        'Does your QA team have to abide by compliance or regulatory standards such as ISO 9001, HIPAA, or SOX? This webinar...'
    },
    {
      image: 'assets/images/product2.jpg',
      icon: 'assets/images/DottedTriangleArrow.svg',
      category: 'Guide',
      title: 'Effective QA Strategies for Agile Teams',
      description:
        'Discover actionable QA strategies that help teams maintain quality while accelerating delivery timelines.'
    },
    {
      image: 'assets/images/product3.jpeg',
      icon: 'assets/images/DottedTriangleArrow.svg',
      category: 'Toolkit',
      title: 'QA Toolkit for Startups',
      description:
        'A comprehensive toolkit for startups to build and maintain QA processes from the ground up.'
    },
    {
      image: 'assets/images/product1.jpg',
      icon: 'assets/images/DottedTriangleArrow.svg',
      category: 'On-Demand Webinar',
      title: 'Testing in Regulated Industries',
      description:
        'Does your QA team have to abide by compliance or regulatory standards such as ISO 9001, HIPAA, or SOX? This webinar...'
    },
    {
      image: 'assets/images/product2.jpg',
      icon: 'assets/images/DottedTriangleArrow.svg',
      category: 'Guide',
      title: 'Effective QA Strategies for Agile Teams',
      description:
        'Discover actionable QA strategies that help teams maintain quality while accelerating delivery timelines.'
    },
    {
      image: 'assets/images/product3.jpeg',
      icon: 'assets/images/DottedTriangleArrow.svg',
      category: 'Toolkit',
      title: 'QA Toolkit for Startups',
      description:
        'A comprehensive toolkit for startups to build and maintain QA processes from the ground up.'
    }
  ];

  track!: HTMLElement;

  ngAfterViewInit() {
    this.track = document.querySelector('.carousel-track') as HTMLElement;
  }

  scrollLeft() {
    const cardWidth = this.getCardWidth();
    this.track.scrollLeft -= cardWidth;
  }

  scrollRight() {
    const cardWidth = this.getCardWidth();
    this.track.scrollLeft += cardWidth;
  }

  private getCardWidth(): number {
    const card = this.track.querySelector('app-products-card') as HTMLElement;
    return card ? card.offsetWidth + 20 : 320; // Add gap (20px) to card width
  }
}


