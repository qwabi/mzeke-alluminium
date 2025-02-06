export default function Schema() {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Mzeke Aluminium',
          image:
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mezke%20logo-RfqmyJmEnVfKsT3egHx4MtRc8TCKzy.png',
          '@id': 'https://mzeke.ayabonga.com',
          url: 'https://mzeke.ayabonga.com',
          telephone: '+27612026116',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Cape Town',
            addressRegion: 'Western Cape',
            addressCountry: 'ZA',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -33.9249,
            longitude: 18.4241,
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
          sameAs: ['https://wa.me/27722797163'],
          priceRange: '$$',
          description:
            "Cape Town's trusted experts in custom aluminium doors, windows, and frameless glass installations. Quality craftsmanship and professional service guaranteed.",
          areaServed: 'Cape Town Metropolitan Area',
        }),
      }}
    />
  );
}
