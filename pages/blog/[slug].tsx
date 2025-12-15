import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { getBlogPostBySlug, getRelatedPosts, type BlogPost } from '@/data/blog-posts'
import { GetStaticPaths, GetStaticProps } from 'next'

interface BlogPostPageProps {
    post: BlogPost
    relatedPosts: BlogPost[]
}

export default function BlogPostPage({ post, relatedPosts }: BlogPostPageProps) {
    const router = useRouter()

    if (!post) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-serif font-bold text-maroon-900 mb-4">Post Not Found</h1>
                        <Link href="/blog">
                            <Button variant="primary">Back to Blog</Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    const shareUrl = `https://panditforpujabooking.com/blog/${post.slug}`
    const whatsappShare = `https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + shareUrl)}`
    const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        image: post.featuredImage,
        datePublished: post.publishedDate,
        dateModified: post.updatedDate || post.publishedDate,
        author: {
            '@type': 'Person',
            name: post.author.name
        },
        publisher: {
            '@type': 'Organization',
            name: 'Pandit For Puja Booking',
            logo: {
                '@type': 'ImageObject',
                url: 'https://panditforpujabooking.com/logo.png'
            }
        },
        keywords: post.keywords.join(', ')
    }

    const tableOfContents = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'significance', title: 'Significance & Benefits' },
        { id: 'procedure', title: 'Puja Procedure' },
        { id: 'samagri', title: 'Required Samagri' },
        { id: 'muhurat', title: 'Auspicious Timings' },
        { id: 'conclusion', title: 'Conclusion' }
    ]

    return (
        <>
            <Head>
                <title>{post.title} | Pandit For Puja Booking Blog</title>
                <meta name="description" content={post.metaDescription} />
                <meta name="keywords" content={post.keywords.join(', ')} />
                <link rel="canonical" href={shareUrl} />

                {/* Open Graph */}
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={shareUrl} />
                <meta property="og:image" content={post.featuredImage} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.metaDescription} />
                <meta name="twitter:image" content={post.featuredImage} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />

            <main className="bg-saffron-50/30">
                {/* Breadcrumb */}
                <nav className="bg-maroon-50 py-3 border-b border-gold-200">
                    <div className="container-custom">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-maroon-700 hover:text-saffron-600 font-medium">Home</Link>
                            <span className="text-gold-400">/</span>
                            <Link href="/blog" className="text-maroon-700 hover:text-saffron-600 font-medium">Blog</Link>
                            <span className="text-gold-400">/</span>
                            <span className="text-maroon-900 font-semibold truncate">{post.title}</span>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-12 md:py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-maroon-950 via-maroon-900/90 to-transparent"></div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-xs font-semibold">{post.category}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-gold-100 text-sm mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-maroon-900 font-bold">
                                        {post.author.avatar}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">{post.author.name}</div>
                                        <div className="text-xs text-gold-200">{post.author.bio}</div>
                                    </div>
                                </div>
                                <span className="hidden md:inline">•</span>
                                <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                <span>•</span>
                                <span>{post.readingTime} min read</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-white/10 border border-gold-500/30 rounded-full text-xs text-gold-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gold-200">
                                {/* Featured Image */}
                                <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden mb-8 shadow-inner">
                                    {post.featuredImage ? (
                                        <Image
                                            src={post.featuredImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-maroon-100 to-gold-100 flex items-center justify-center">
                                            <span className="text-8xl opacity-50">🕉️</span>
                                        </div>
                                    )}
                                </div>

                                {/* Article Content */}
                                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-maroon-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-saffron-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-maroon-800">

                                    <section id="introduction">
                                        <h2 className="text-3xl font-bold mb-4 flex items-center">
                                            <span className="w-10 h-10 rounded-full bg-maroon-100 text-maroon-800 flex items-center justify-center text-lg mr-3">📖</span>
                                            Introduction
                                        </h2>
                                        <p className="text-lg leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <p>
                                            In Hindu tradition, every ritual and ceremony holds deep spiritual significance. This comprehensive guide will walk you through everything you need to know about performing this sacred puja with complete devotion and adherence to Vedic principles.
                                        </p>
                                    </section>

                                    <div className="bg-gold-50 border-l-4 border-gold-500 p-6 my-8 rounded-r-lg not-prose">
                                        <p className="font-semibold text-maroon-800 mb-2 text-lg">✨ Quick Summary</p>
                                        <p className="text-gray-700 text-sm">
                                            This article covers the complete procedure, significance, required materials, auspicious timings, and benefits of this puja. Perfect for those planning to perform this ritual at home or seeking to understand its spiritual importance.
                                        </p>
                                    </div>

                                    <section id="significance">
                                        <h2 className="text-3xl font-bold mb-4">Significance & Spiritual Benefits</h2>
                                        <p>
                                            This puja is performed to invoke divine blessings and create positive energy in your life. According to Vedic scriptures, performing this ritual with proper devotion brings numerous benefits to the devotee and their family.
                                        </p>

                                        <h3 className="text-2xl font-bold mt-6 mb-3">Key Benefits:</h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 not-prose">
                                            {[
                                                'Removes negative energies and obstacles',
                                                'Brings peace and harmony to the household',
                                                'Invokes blessings for prosperity and success',
                                                'Strengthens spiritual connection',
                                                'Protects from malefic planetary influences',
                                                'Promotes overall well-being and happiness'
                                            ].map((benefit, i) => (
                                                <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gold-100">
                                                    <span className="text-saffron-500 mr-2 mt-1 text-xl">✓</span>
                                                    <span className="text-gray-700">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section id="procedure">
                                        <h2 className="text-3xl font-bold mb-4">Step-by-Step Puja Procedure</h2>
                                        <p>
                                            Follow these traditional steps to perform the puja correctly. Each step has specific significance and should be performed with devotion and concentration.
                                        </p>

                                        <div className="bg-white rounded-xl shadow-md border border-gold-200 overflow-hidden my-8 not-prose">
                                            <div className="bg-maroon-900 text-white p-6 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                                <h3 className="text-2xl font-serif font-bold relative z-10">Puja Vidhi</h3>
                                                <p className="text-gold-200 mt-2 relative z-10">Traditional Vedic procedure</p>
                                            </div>

                                            <div className="p-6 space-y-6">
                                                {[
                                                    {
                                                        step: '1',
                                                        title: 'Preparation & Purification',
                                                        desc: 'Clean the puja area, take bath, wear clean clothes. Set up the altar with deity idol/picture.'
                                                    },
                                                    {
                                                        step: '2',
                                                        title: 'Sankalp (Resolution)',
                                                        desc: 'Take sankalp by stating your name, gotra, and purpose of the puja. Invoke Lord Ganesha for obstacle-free completion.'
                                                    },
                                                    {
                                                        step: '3',
                                                        title: 'Kalash Sthapana',
                                                        desc: 'Establish the sacred kalash with water, mango leaves, and coconut. This represents divine presence.'
                                                    },
                                                    {
                                                        step: '4',
                                                        title: 'Main Deity Worship',
                                                        desc: 'Perform panchopachara or shodashopachara puja with flowers, incense, lamp, and offerings.'
                                                    },
                                                    {
                                                        step: '5',
                                                        title: 'Mantra Chanting',
                                                        desc: 'Recite specific mantras and stotras dedicated to the deity. Maintain focus and devotion.'
                                                    },
                                                    {
                                                        step: '6',
                                                        title: 'Havan (Fire Ritual)',
                                                        desc: 'Perform havan with ghee, herbs, and samagri while chanting mantras. Offer ahuti (oblations).'
                                                    },
                                                    {
                                                        step: '7',
                                                        title: 'Aarti & Prasad',
                                                        desc: 'Conclude with aarti, distribute prasad to all participants, and seek blessings.'
                                                    }
                                                ].map((item) => (
                                                    <div key={item.step} className="flex gap-4">
                                                        <div className="flex-shrink-0 w-12 h-12 bg-maroon-900 text-gold-400 rounded-full flex items-center justify-center font-bold text-lg">
                                                            {item.step}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-bold text-maroon-900 text-lg mb-1">{item.title}</h4>
                                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>

                                    <section id="samagri">
                                        <h2 className="text-3xl font-bold mb-4">Required Puja Samagri</h2>
                                        <p>
                                            Here's a comprehensive list of items needed for the puja. At Pandit For Puja Booking, we provide most samagri items, and you only need to arrange fresh perishables.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gradient-to-br from-white to-saffron-50/30 p-6 rounded-xl shadow-md border border-gold-200">
                                                <h3 className="font-bold text-maroon-800 mb-4 flex items-center text-lg">
                                                    <span className="text-2xl mr-2">📦</span> We Provide
                                                </h3>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Kalash and puja vessels</li>
                                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Deity idol/picture</li>
                                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Kumkum, turmeric, sindoor</li>
                                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Incense sticks and dhoop</li>
                                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Camphor and cotton wicks</li>
                                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Havan samagri and wood</li>
                                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Sacred thread (moli)</li>
                                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Puja plates and spoons</li>
                                                </ul>
                                            </div>

                                            <div className="bg-gradient-to-br from-white to-gold-50/30 p-6 rounded-xl shadow-md border border-gold-200">
                                                <h3 className="font-bold text-maroon-800 mb-4 flex items-center text-lg">
                                                    <span className="text-2xl mr-2">🏠</span> You Arrange
                                                </h3>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li className="flex items-center"><span className="text-saffron-500 mr-2">○</span> Fresh flowers (500g)</li>
                                                    <li className="flex items-center"><span className="text-saffron-500 mr-2">○</span> Mango leaves</li>
                                                    <li className="flex items-center"><span className="text-saffron-500 mr-2">○</span> Coconuts (2-3)</li>
                                                    <li className="flex items-center"><span className="text-saffron-500 mr-2">○</span> Fresh fruits (5 types)</li>
                                                    <li className="flex items-center"><span className="text-saffron-500 mr-2">○</span> Milk, curd, honey</li>
                                                    <li className="flex items-center"><span className="text-saffron-500 mr-2">○</span> Ghee (250ml)</li>
                                                    <li className="flex items-center"><span className="text-saffron-500 mr-2">○</span> Sweets (laddoo/pedha)</li>
                                                    <li className="flex items-center"><span className="text-saffron-500 mr-2">○</span> Rice (500g)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="muhurat">
                                        <h2 className="text-3xl font-bold mb-4">Auspicious Timings & Muhurat</h2>
                                        <p>
                                            Selecting the right muhurat is crucial for maximizing the benefits of the puja. Consult with our expert astrologers for personalized muhurat based on your birth chart.
                                        </p>

                                        <div className="bg-maroon-50 border border-maroon-200 rounded-xl p-6 my-6 not-prose">
                                            <h3 className="font-bold text-maroon-900 mb-3">General Auspicious Days:</h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                                                <li className="flex items-center"><span className="text-gold-500 mr-2">★</span> Full Moon (Purnima)</li>
                                                <li className="flex items-center"><span className="text-gold-500 mr-2">★</span> New Moon (Amavasya)</li>
                                                <li className="flex items-center"><span className="text-gold-500 mr-2">★</span> Ekadashi (11th lunar day)</li>
                                                <li className="flex items-center"><span className="text-gold-500 mr-2">★</span> Monday (for Shiva pujas)</li>
                                                <li className="flex items-center"><span className="text-gold-500 mr-2">★</span> Friday (for Lakshmi pujas)</li>
                                                <li className="flex items-center"><span className="text-gold-500 mr-2">★</span> Navratri period</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="conclusion">
                                        <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                                        <p>
                                            Performing this puja with proper devotion and following Vedic guidelines brings immense spiritual benefits. Whether you're seeking prosperity, peace, or divine blessings, this sacred ritual creates a powerful connection with the divine.
                                        </p>
                                        <p>
                                            At Pandit For Puja Booking, our experienced pandits ensure that every ritual is performed authentically with complete samagri and proper mantras. Book your puja today and experience the divine transformation in your life.
                                        </p>
                                    </section>

                                    <div className="bg-gradient-to-r from-maroon-900 to-saffron-900 text-white p-8 rounded-2xl my-8 not-prose">
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-gold-300">Ready to Book This Puja?</h3>
                                        <p className="text-gold-100 mb-6">
                                            Connect with our verified pandits for authentic Vedic rituals at your home. Complete samagri included.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link href="/puja-services">
                                                <Button variant="secondary" size="lg" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    Book Puja Now
                                                </Button>
                                            </Link>
                                            <a href="tel:+918446272142">
                                                <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                    Call +91-8446272142
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Sharing */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="font-serif font-bold text-xl text-maroon-900 mb-4">Share This Article</h3>
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={whatsappShare}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center gap-2"
                                        >
                                            <span>📱</span> WhatsApp
                                        </a>
                                        <a
                                            href={facebookShare}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                                        >
                                            <span>👍</span> Facebook
                                        </a>
                                        <a
                                            href={twitterShare}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600 transition-colors flex items-center gap-2"
                                        >
                                            <span>🐦</span> Twitter
                                        </a>
                                    </div>
                                </div>
                            </article>

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <section className="mt-12">
                                    <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-8">Related Articles</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {relatedPosts.map((relatedPost) => (
                                            <Link
                                                key={relatedPost.slug}
                                                href={`/blog/${relatedPost.slug}`}
                                                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gold-300"
                                            >
                                                <div className="relative h-40 bg-gray-200 overflow-hidden">
                                                    {relatedPost.featuredImage ? (
                                                        <Image
                                                            src={relatedPost.featuredImage}
                                                            alt={relatedPost.title}
                                                            fill
                                                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-maroon-100 to-gold-100 flex items-center justify-center">
                                                            <span className="text-4xl opacity-50">📿</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-5">
                                                    <span className="text-xs px-2 py-1 bg-saffron-100 text-saffron-700 rounded font-medium">
                                                        {relatedPost.category}
                                                    </span>
                                                    <h3 className="text-lg font-serif font-bold text-maroon-900 mt-3 mb-2 group-hover:text-saffron-700 transition-colors line-clamp-2">
                                                        {relatedPost.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                                                    <div className="mt-3 text-gold-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
                                                        Read →
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Table of Contents */}
                                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                    <h3 className="font-serif font-bold text-lg text-maroon-900 mb-4 border-b border-gold-200 pb-3">
                                        Table of Contents
                                    </h3>
                                    <nav className="space-y-2">
                                        {tableOfContents.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className="block text-sm text-gray-600 hover:text-saffron-600 hover:translate-x-1 transition-all py-1"
                                            >
                                                {item.title}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                {/* Author Info */}
                                <div className="bg-gradient-to-br from-white to-saffron-50/30 rounded-xl shadow-md p-6 border border-gold-200">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-16 h-16 bg-maroon-900 text-gold-300 rounded-full flex items-center justify-center text-2xl font-bold">
                                            {post.author.avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-maroon-900">{post.author.name}</h4>
                                            <p className="text-xs text-gray-600">Author</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700">{post.author.bio}</p>
                                </div>

                                {/* Contact CTA */}
                                <div className="bg-maroon-900 rounded-xl shadow-md p-6 text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                    <div className="relative z-10">
                                        <h3 className="font-serif font-bold text-xl text-gold-300 mb-2">
                                            Need Expert Guidance?
                                        </h3>
                                        <p className="text-gold-100 text-sm mb-4">
                                            Talk to our pandits for personalized puja consultation
                                        </p>
                                        <a href="tel:+918446272142">
                                            <Button variant="secondary" size="sm" className="w-full bg-gold-500 text-maroon-900 hover:bg-gold-400 mb-2">
                                                Call Now
                                            </Button>
                                        </a>
                                        <a href="https://wa.me/918446272142">
                                            <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                WhatsApp
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { blogPosts } = await import('@/data/blog-posts')

    const paths = blogPosts.map((post) => ({
        params: { slug: post.slug }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
    const slug = params?.slug as string
    const post = getBlogPostBySlug(slug)

    if (!post) {
        return {
            notFound: true
        }
    }

    const relatedPosts = getRelatedPosts(slug, 3)

    return {
        props: {
            post,
            relatedPosts
        }
    }
}
