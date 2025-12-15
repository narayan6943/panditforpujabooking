import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { blogPosts, blogCategories, getFeaturedPosts } from '@/data/blog-posts'
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const siteUrl = 'https://panditforpujabooking.com';
    const rssTemplate = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Pandit For Puja Booking Blog</title>
      <link>${siteUrl}/blog</link>
      <description>Expert Vedic Insights, Ritual Guides, and Spiritual Knowledge.</description>
      <language>en</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
      ${blogPosts.map(post => `
      <item>
        <guid>${siteUrl}/blog/${post.slug}</guid>
        <title><![CDATA[${post.title}]]></title>
        <link>${siteUrl}/blog/${post.slug}</link>
        <description><![CDATA[${post.excerpt}]]></description>
        <pubDate>${new Date(post.publishedDate).toUTCString()}</pubDate>
      </item>
      `).join('')}
    </channel>
  </rss>`;

    const publicPath = path.join(process.cwd(), 'public', 'rss.xml');
    fs.writeFileSync(publicPath, rssTemplate);

    return {
        props: {}
    }
}

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const featuredPosts = getFeaturedPosts()

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === blogCategories.find(c => c.slug === selectedCategory)?.name
        const matchesSearch = searchQuery === '' ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        return matchesCategory && matchesSearch
    })

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Pandit For Puja Booking Blog',
        description: 'Expert guides on Hindu rituals, puja vidhi, muhurat dates, and spiritual wisdom from certified Vedic pandits.',
        url: 'https://panditforpujabooking.com/blog',
        publisher: {
            '@type': 'Organization',
            name: 'Pandit For Puja Booking',
            logo: {
                '@type': 'ImageObject',
                url: 'https://panditforpujabooking.com/logo.png'
            }
        }
    }

    return (
        <>
            <Head>
                <title>Blog - Puja Guides, Muhurat & Spiritual Wisdom | Pandit For Puja Booking</title>
                <meta
                    name="description"
                    content="Expert guides on Hindu rituals, puja vidhi, muhurat dates, Vastu tips, and spiritual wisdom. Learn from certified Vedic pandits and astrologers."
                />
                <meta
                    name="keywords"
                    content="puja guide, hindu rituals, muhurat dates, spiritual wisdom, vastu tips, vedic knowledge, puja vidhi, festival celebrations"
                />
                <link rel="canonical" href="https://panditforpujabooking.com/blog" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            <Header />

            <main className="bg-saffron-50/30">
                {/* Hero Section */}
                <section className="relative bg-maroon-900 text-white py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-mandala-dark opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-maroon-950 via-maroon-900/90 to-transparent"></div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block border-b-2 border-gold-500 pb-1 mb-4">
                                <span className="text-gold-300 font-serif tracking-widest uppercase text-sm font-semibold">Spiritual Knowledge</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                                Vedic Wisdom & <span className="text-gold-400">Puja Guides</span>
                            </h1>
                            <p className="text-lg text-gold-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Expert insights on Hindu rituals, auspicious muhurat dates, spiritual practices, and Vedic knowledge from certified pandits and astrologers.
                            </p>

                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto mb-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border-2 border-gold-500/30 text-white placeholder-gold-200 focus:outline-none focus:border-gold-400 transition-all"
                                    />
                                    <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gold-300 text-xl">🔍</span>
                                </div>
                            </div>

                            {/* Category Pills */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {blogCategories.map((category) => (
                                    <button
                                        key={category.slug}
                                        onClick={() => setSelectedCategory(category.slug)}
                                        className={`px-6 py-2 rounded-full font-medium text-sm transition-all transform hover:scale-105 ${selectedCategory === category.slug
                                            ? 'bg-gold-500 text-maroon-900 shadow-lg shadow-gold-500/50'
                                            : 'bg-white/10 text-gold-100 border border-gold-500/30 hover:bg-white/20'
                                            }`}
                                    >
                                        {category.name} ({category.count})
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Posts */}
                {selectedCategory === 'all' && searchQuery === '' && (
                    <section className="section-padding bg-white border-b border-gold-200">
                        <div className="container-custom">
                            <div className="text-center mb-12">
                                <span className="text-maroon-600 font-bold tracking-widest uppercase text-sm">Editor's Pick</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mt-2 mb-4">
                                    Featured Articles
                                </h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredPosts.map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group bg-gradient-to-br from-white to-saffron-50/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gold-200 hover:border-gold-400 transform hover:-translate-y-2"
                                    >
                                        <div className="relative h-56 bg-gray-200 overflow-hidden">
                                            {post.featuredImage ? (
                                                <Image
                                                    src={post.featuredImage}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-maroon-100 to-gold-100 flex items-center justify-center">
                                                    <span className="text-6xl opacity-50">📿</span>
                                                </div>
                                            )}
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="px-3 py-1 bg-maroon-900 text-gold-300 text-xs font-bold rounded-full uppercase tracking-wide shadow-md">
                                                    Featured
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                                                <span className="px-2 py-1 bg-saffron-100 text-saffron-700 rounded font-medium">{post.category}</span>
                                                <span>•</span>
                                                <span>{post.readingTime} min read</span>
                                            </div>
                                            <h3 className="text-xl font-serif font-bold text-maroon-900 mb-3 group-hover:text-saffron-700 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-700 text-xs font-bold">
                                                        {post.author.avatar}
                                                    </div>
                                                    <span className="text-xs text-gray-600">{post.author.name}</span>
                                                </div>
                                                <span className="text-gold-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
                                                    Read →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* All Blog Posts */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-2">
                                        {selectedCategory === 'all' ? 'All Articles' : blogCategories.find(c => c.slug === selectedCategory)?.name}
                                    </h2>
                                    <p className="text-gray-600">
                                        {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {filteredPosts.map((post) => (
                                        <Link
                                            key={post.slug}
                                            href={`/blog/${post.slug}`}
                                            className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gold-300"
                                        >
                                            <div className="md:flex">
                                                <div className="md:w-1/3 relative h-48 md:h-auto bg-gray-200 overflow-hidden">
                                                    {post.featuredImage ? (
                                                        <Image
                                                            src={post.featuredImage}
                                                            alt={post.title}
                                                            fill
                                                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-maroon-100 to-gold-100 flex items-center justify-center">
                                                            <span className="text-5xl opacity-50">🕉️</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="md:w-2/3 p-6">
                                                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                                                        <span className="px-2 py-1 bg-saffron-100 text-saffron-700 rounded font-medium">{post.category}</span>
                                                        <span>•</span>
                                                        <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                        <span>•</span>
                                                        <span>{post.readingTime} min read</span>
                                                    </div>
                                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-maroon-900 mb-3 group-hover:text-saffron-700 transition-colors">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                                                        {post.excerpt}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-8 h-8 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-700 text-xs font-bold">
                                                                {post.author.avatar}
                                                            </div>
                                                            <div>
                                                                <div className="text-xs font-medium text-gray-700">{post.author.name}</div>
                                                            </div>
                                                        </div>
                                                        <span className="text-gold-600 font-bold text-sm group-hover:translate-x-2 transition-transform inline-block">
                                                            Read Article →
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {filteredPosts.length === 0 && (
                                    <div className="text-center py-16">
                                        <div className="text-6xl mb-4">📚</div>
                                        <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-2">No articles found</h3>
                                        <p className="text-gray-600 mb-6">Try adjusting your search or category filter</p>
                                        <Button variant="primary" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                                            View All Articles
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24 space-y-6">
                                    {/* Popular Posts */}
                                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                        <h3 className="font-serif font-bold text-xl text-maroon-900 mb-4 border-b border-gold-200 pb-3">
                                            Popular Posts
                                        </h3>
                                        <div className="space-y-4">
                                            {blogPosts.slice(0, 5).map((post, index) => (
                                                <Link
                                                    key={post.slug}
                                                    href={`/blog/${post.slug}`}
                                                    className="group block"
                                                >
                                                    <div className="flex gap-3">
                                                        <span className="text-2xl font-serif font-bold text-gold-400">{index + 1}</span>
                                                        <div className="flex-1">
                                                            <h4 className="text-sm font-semibold text-gray-800 group-hover:text-saffron-600 transition-colors line-clamp-2 mb-1">
                                                                {post.title}
                                                            </h4>
                                                            <span className="text-xs text-gray-500">{post.readingTime} min read</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Categories */}
                                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                        <h3 className="font-serif font-bold text-xl text-maroon-900 mb-4 border-b border-gold-200 pb-3">
                                            Categories
                                        </h3>
                                        <div className="space-y-2">
                                            {blogCategories.map((category) => (
                                                <button
                                                    key={category.slug}
                                                    onClick={() => setSelectedCategory(category.slug)}
                                                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${selectedCategory === category.slug
                                                        ? 'bg-maroon-900 text-gold-300 font-semibold'
                                                        : 'text-gray-700 hover:bg-saffron-50'
                                                        }`}
                                                >
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm">{category.name}</span>
                                                        <span className="text-xs opacity-70">({category.count})</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Newsletter */}
                                    <div className="bg-maroon-900 rounded-xl shadow-md p-6 text-white relative overflow-hidden">
                                        <div className="absolute inset-0 bg-pattern-mandala-dark opacity-20"></div>
                                        <div className="relative z-10">
                                            <h3 className="font-serif font-bold text-xl text-gold-300 mb-2">
                                                Stay Updated
                                            </h3>
                                            <p className="text-gold-100 text-sm mb-4">
                                                Get spiritual wisdom and puja guides in your inbox
                                            </p>
                                            <input
                                                type="email"
                                                placeholder="Your email"
                                                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gold-500/30 text-white placeholder-gold-200 mb-3 focus:outline-none focus:border-gold-400"
                                            />
                                            <Button variant="secondary" size="sm" className="w-full bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                                Subscribe
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Contact CTA */}
                                    <div className="bg-gradient-to-br from-saffron-50 to-gold-50 rounded-xl shadow-md p-6 border-2 border-gold-200">
                                        <h3 className="font-serif font-bold text-lg text-maroon-900 mb-2">
                                            Need Puja Guidance?
                                        </h3>
                                        <p className="text-gray-700 text-sm mb-4">
                                            Talk to our expert pandits for personalized advice
                                        </p>
                                        <a href="tel:+918446272142">
                                            <Button variant="primary" size="sm" className="w-full">
                                                Call +91-8446272142
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-pattern-mandala border-t border-gold-300">
                    <div className="container-custom text-center max-w-4xl mx-auto">
                        <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-gold-500/20">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-4">
                                Ready to Book a Puja?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Connect with verified pandits for authentic Vedic rituals at your home
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/puja-services">
                                    <Button variant="primary" size="lg" className="px-10">
                                        Explore Puja Services
                                    </Button>
                                </Link>
                                <a href="https://wa.me/918446272142">
                                    <Button variant="primary" className="bg-gold-500 text-maroon-900 hover:bg-gold-400">
                                        Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
