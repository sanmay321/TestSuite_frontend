import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
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

  scrollLeft() {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    track.scrollLeft -= 320; // Scroll based on the new card width
  }
  
  scrollRight() {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    track.scrollLeft += 320; // Scroll based on the new card width
  }
}


