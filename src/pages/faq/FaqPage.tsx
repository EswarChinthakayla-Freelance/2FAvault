import { useEffect, useState } from 'react';
import { HelpCircle, Search } from 'lucide-react';
import { updatePageMetadata } from '../../lib/seo';
import { Section } from '../../components/layout/Section';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';
import { FAQ_ITEMS } from '../../content/faq';
import { cn } from '../../lib/cn';

export function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    updatePageMetadata({
      title: 'Frequently Asked Questions (FAQ)',
      description:
        'Find answers to common questions about 2FA Vault: offline operation, zero-knowledge encryption, recovery keys, and APK installation.',
      canonical: '/faq',
    });
  }, []);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'security', label: 'Security & Encryption' },
    { id: 'recovery', label: 'Emergency Recovery' },
    { id: 'sync', label: 'Sync & Devices' },
    { id: 'installation', label: 'APK & Installation' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section glow className="border-b border-border">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
            Help & Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Clear, technical, and truthful answers to how 2FA Vault handles your data and privacy.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions or keywords (e.g. offline, recovery, APK)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="min-h-12 w-full rounded-[16px] border border-border bg-surface pl-11 pr-4 py-3 text-sm font-medium text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs List */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'min-h-10 rounded-[14px] border px-3.5 py-1.5 text-xs font-semibold transition-all whitespace-nowrap active:scale-[0.98] cursor-pointer',
                  selectedCategory === cat.id
                    ? 'border-foreground bg-foreground text-background shadow-md'
                    : 'border-border bg-surface-elevated text-muted-foreground hover:-translate-y-0.5 hover:text-foreground'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredFaqs.length > 0 ? (
            <Accordion type="multiple" defaultValue={filteredFaqs.slice(0, 2).map((f) => f.id)}>
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger value={faq.id}>{faq.question}</AccordionTrigger>
                  <AccordionContent value={faq.id}>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-16 rounded-3xl border border-border bg-surface p-8">
              <HelpCircle className="h-10 w-10 text-muted mx-auto mb-3" />
              <h3 className="text-base font-bold text-foreground">No matching questions found</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Try searching for different terms or reset your category filter.
              </p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
