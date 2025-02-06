'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Phone,
  Mail,
  MapPin,
  DoorOpen,
  GlassWater,
  Wine,
  ShowerHeadIcon as Shower,
  LayoutGrid,
  DoorClosed,
  Clock,
  CheckCircle,
  Banknote,
  Headphones,
} from 'lucide-react';
import { useEffect } from 'react';

const productCategories = [
  {
    title: 'Custom Solutions',
    products: [
      'Custom Doors',
      'Custom Windows',
      'Frameless Balustrades',
      'Frameless Wine Cellar Doors',
      'Frameless Showers',
    ],
    icon: GlassWater,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Premium Doors',
    products: [
      'Vistafold Stacking Sliding Doors',
      'Palace High Performance Sliding Doors',
      'Patio Sliding Doors',
      'Pivot Doors',
      'Stable Doors',
    ],
    icon: DoorOpen,
    image:
      'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Specialized Doors',
    products: ['Hinge Doors', 'Door Side Lites', 'Hinged Entrance Doors'],
    icon: DoorClosed,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frameless-glass-doors-wine-cellar-1.jpg.jpeg-rmyDCxDgh7fNMMblgwDTeeyD6ydnDg.webp',
  },
  {
    title: 'Windows',
    products: [
      'Casement 30.5 Side Hung Windows',
      'Casement 30.5 Top Hung Windows',
    ],
    icon: LayoutGrid,
    image:
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Shower Solutions',
    products: [
      'Pivot Shower Door',
      'Tri-Glide Shower Door',
      'Custom Shower Enclosures',
    ],
    icon: Shower,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frameless-Shower-Doors-q33xyunadlshypznp6f5nrh4vm1kpznvug0q1a7ncw-UfEKQbc7ksLUJTK48nlgod5Sb87uKC.jpeg',
  },
  {
    title: 'Specialty Glass',
    products: [
      'Frameless Balustrades',
      'Wine Cellar Solutions',
      'Custom Glass Installations',
    ],
    icon: Wine,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frameless-Balustrade.jpg.jpeg-rmZuVRAZ6L5oTwRtM56SvDebvUPdCk.webp',
  },
];

export default function Home() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-20 items-center'>
          <Link href='/' className='flex items-center space-x-3'>
            <Image
              src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mezke%20logo-RfqmyJmEnVfKsT3egHx4MtRc8TCKzy.png'
              alt='Mzeke Aluminium Logo'
              width={50}
              height={50}
              className='rounded-full'
            />
            <span className='font-bold text-xl text-[#004aad]'>
              Mzeke Aluminium
            </span>
          </Link>
          <nav className='ml-auto flex gap-4 sm:gap-6'>
            <a
              href='#products'
              className='text-sm font-medium hover:text-[#004aad] transition-colors'
            >
              Products
            </a>
            <a
              href='#features'
              className='text-sm font-medium hover:text-[#004aad] transition-colors'
            >
              Features
            </a>
            <a
              href='#testimonials'
              className='text-sm font-medium hover:text-[#004aad] transition-colors'
            >
              Testimonials
            </a>
            <a
              href='#contact'
              className='text-sm font-medium hover:text-[#004aad] transition-colors'
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className='flex-1'>
        <section className='relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#004aad] overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <Image
              alt='Modern Aluminium Installation Background'
              className='object-cover w-full h-full opacity-20'
              height={1080}
              width={1920}
              src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop'
            />
            <div className='absolute inset-0 bg-[#004aad]/60 mix-blend-multiply' />
          </div>
          <div className='container relative px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4 text-white'>
                <div className='flex items-center justify-start mb-8'>
                  <div className='relative'>
                    <div className='absolute inset-0 bg-white rounded-full blur-lg opacity-50'></div>
                    <Image
                      src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mezke%20logo-RfqmyJmEnVfKsT3egHx4MtRc8TCKzy.png'
                      alt='Mzeke Aluminium Logo'
                      width={120}
                      height={120}
                      className='relative rounded-full border-4 border-white shadow-2xl'
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Premium Aluminium & Glass Solutions
                  </h1>
                  <p className='max-w-[600px] text-zinc-100 md:text-xl'>
                    Specializing in custom doors, windows, and frameless glass
                    installations. Cape Town's trusted aluminium experts.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button
                    size='lg'
                    className='bg-white text-[#004aad] hover:bg-zinc-100'
                    onClick={scrollToContact}
                  >
                    Get a Free Quote
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='border-white text-white hover:bg-white/20'
                  >
                    View Products
                  </Button>
                </div>
              </div>
              <div className='relative hidden lg:block'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#004aad]/20 to-transparent rounded-xl' />
                <Image
                  alt='Featured Aluminium Installation'
                  className='relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center shadow-xl'
                  height='550'
                  width='550'
                  src='https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2940&auto=format&fit=crop'
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id='products'
          className='w-full py-12 md:py-24 lg:py-32 bg-white'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Our Products
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {productCategories.map((category, index) => (
                <Card key={index} className='group overflow-hidden'>
                  <div className='relative h-48 w-full'>
                    <Image
                      alt={category.title}
                      className='object-cover w-full h-full transition-transform group-hover:scale-105'
                      height='200'
                      src={category.image || '/placeholder.svg'}
                      width='400'
                    />
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors' />
                    <category.icon className='absolute top-4 right-4 h-6 w-6 text-white' />
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold mb-4'>{category.title}</h3>
                    <ul className='space-y-2 text-sm text-zinc-500 mb-6'>
                      {category.products.map((product, idx) => (
                        <li key={idx} className='flex items-center'>
                          <CheckCircle className='h-4 w-4 mr-2 text-[#004aad]' />
                          {product}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant='outline'
                      className='w-full'
                      onClick={scrollToContact}
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-50'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Why Choose Us
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                {
                  title: 'Experience',
                  description: 'Years of industry expertise',
                  icon: Clock,
                },
                {
                  title: 'Quality',
                  description: 'Premium materials and craftsmanship',
                  icon: CheckCircle,
                },
                {
                  title: 'Affordability',
                  description: 'Competitive pricing for all budgets',
                  icon: Banknote,
                },
                {
                  title: 'Support',
                  description: 'Dedicated customer service',
                  icon: Headphones,
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className='flex flex-col items-center p-6 space-y-4 text-center hover:shadow-lg transition-shadow'
                >
                  <div className='p-3 bg-[#e6eeff] rounded-full'>
                    <feature.icon className='h-6 w-6 text-[#004aad]' />
                  </div>
                  <h3 className='text-xl font-bold'>{feature.title}</h3>
                  <p className='text-zinc-500'>{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id='testimonials'
          className='w-full py-12 md:py-24 lg:py-32 bg-white'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              What Our Clients Say
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                {
                  name: 'John D.',
                  text: 'Excellent service! The team was professional and efficient.',
                  image:
                    'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2944&auto=format&fit=crop',
                },
                {
                  name: 'Sarah M.',
                  text: 'Love my new aluminum windows. They look great and function perfectly.',
                  image:
                    'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2940&auto=format&fit=crop',
                },
                {
                  name: 'Michael R.',
                  text: 'Highly recommend Mzeke Aluminium for their quality and reliability.',
                  image:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop',
                },
              ].map((testimonial, index) => (
                <Card key={index} className='flex flex-col justify-between p-6'>
                  <div className='space-y-4'>
                    <Image
                      alt={testimonial.name}
                      className='rounded-full w-16 h-16 object-cover'
                      height='64'
                      src={testimonial.image || '/placeholder.svg'}
                      width='64'
                    />
                    <p className='text-zinc-500'>"{testimonial.text}"</p>
                  </div>
                  <p className='font-bold mt-4'>- {testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id='contact'
          className='w-full py-12 md:py-24 lg:py-32 bg-[#004aad] text-white'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center text-center'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl mb-4'>
                Get in Touch
              </h2>
              <p className='max-w-[600px] text-zinc-100 md:text-xl mb-8'>
                Ready to enhance your home? Contact us for a free quote or any
                inquiries.
              </p>
              <div className='space-y-4 w-full max-w-sm'>
                <a
                  href='tel:+27612026116'
                  className='flex items-center justify-center space-x-3 bg-white text-[#004aad] py-2 px-4 rounded-md hover:bg-zinc-100 transition-colors w-full'
                >
                  <Phone className='h-5 w-5' />
                  <span className='font-medium'>Call Us: 061 202 6116</span>
                </a>
                <a
                  href='https://wa.me/27722797163'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center space-x-3 bg-[#25D366] text-white py-2 px-4 rounded-md hover:bg-[#128C7E] transition-colors w-full'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                  </svg>
                  <span className='font-medium'>Chat on WhatsApp</span>
                </a>
              </div>
              <div className='mt-8 space-y-2 text-center'>
                <div className='flex items-center justify-center space-x-3'>
                  <Phone className='h-5 w-5' />
                  <span>061 202 6116 / 072 279 7163</span>
                </div>
                <div className='flex items-center justify-center space-x-3'>
                  <Mail className='h-5 w-5' />
                  <span>mzekelobanisa@gmail.com</span>
                </div>
                <div className='flex items-center justify-center space-x-3'>
                  <MapPin className='h-5 w-5' />
                  <span>Cape Town, South Africa</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='w-full border-t bg-white'>
        <div className='container flex flex-col gap-4 py-10 px-4 md:px-6'>
          <div className='flex items-center space-x-2'>
            <Image
              src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mezke%20logo-RfqmyJmEnVfKsT3egHx4MtRc8TCKzy.png'
              alt='Mzeke Aluminium Logo'
              width={40}
              height={40}
              className='rounded-full'
            />
            <span className='font-bold text-[#004aad]'>Mzeke Aluminium</span>
          </div>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4'>
            <div className='space-y-3'>
              <h4 className='font-bold'>Products</h4>
              <ul className='space-y-2 text-sm text-zinc-500'>
                <li>Custom Doors & Windows</li>
                <li>Frameless Solutions</li>
                <li>Sliding Systems</li>
                <li>Shower Enclosures</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h4 className='font-bold'>Company</h4>
              <ul className='space-y-2 text-sm text-zinc-500'>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h4 className='font-bold'>Support</h4>
              <ul className='space-y-2 text-sm text-zinc-500'>
                <li>Installation Guide</li>
                <li>Maintenance Tips</li>
                <li>FAQs</li>
                <li>Warranty Info</li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h4 className='font-bold'>Contact</h4>
              <ul className='space-y-2 text-sm text-zinc-500'>
                <li className='flex items-center gap-2'>
                  <Phone className='h-4 w-4' />
                  0612026116
                </li>
                <li className='flex items-center gap-2'>
                  <Phone className='h-4 w-4' />
                  0722797163
                </li>
                <li className='flex items-center gap-2'>
                  <Mail className='h-4 w-4' />
                  mzekelobanisa@gmail.com
                </li>
                <li className='flex items-center gap-2'>
                  <MapPin className='h-4 w-4' />
                  Cape Town, SA
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-2 sm:flex-row justify-between items-center border-t pt-6'>
            <p className='text-xs text-zinc-500'>
              © 2024 Mzeke Aluminium. All rights reserved.
            </p>
            <div className='flex gap-4'>
              <Link className='text-xs text-zinc-500 hover:underline' href='#'>
                Privacy Policy
              </Link>
              <Link className='text-xs text-zinc-500 hover:underline' href='#'>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
