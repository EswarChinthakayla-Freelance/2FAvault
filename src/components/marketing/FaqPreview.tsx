import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';
import { FAQ_ITEMS } from '../../content/faq';

export function FaqPreview() {
  const topFaqs = FAQ_ITEMS.slice(0, 4);

  return (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={[topFaqs[0].id]}>
        {topFaqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger value={faq.id}>{faq.question}</AccordionTrigger>
            <AccordionContent value={faq.id}>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center pt-2">
        <Link
          to="/faq"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors group"
        >
          <span>View all {FAQ_ITEMS.length} frequently asked questions</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
