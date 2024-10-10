import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Gitlab, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export function FrontendDeveloperCv() {
  return (
    <div className='min-h-screen min-w-screen grid items-center justify-center'>
      <div className='container mx-auto p-4 sm:p-6 space-y-8 max-w-3xl'>
        <header className='text-center space-y-4'>
          <div className='mx-auto w-24 h-24 sm:w-28 sm:h-28 relative mb-4'>
            <Image
              src='/cv/image/portrait.jpg'
              alt="Keisuke Tanaka's profile picture"
              layout='fill'
              className='rounded-full'
            />
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold'>Keisuke Tanaka</h1>
          <h2 className='text-xl sm:text-2xl text-neutral-500 dark:text-neutral-400'>
            Full Stack / Front End Developer
          </h2>
          <div className='flex justify-center items-center space-x-4 flex-col sm:flex-row'>
            <a
              target='_blank'
              href='mailto:keisuketanaka97@gmail.com'
              className='flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'
            >
              <Mail className='w-4 h-4 mr-2' />
              keisuketanaka97@gmail.com
            </a>
            <a
              target='_blank'
              href='https://github.com/kei0528'
              className='flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'
            >
              <Github className='w-4 h-4 mr-2' />
              github.com/kei0528
            </a>
            <a
              target='_blank'
              href='https://gitlab.com/kei0528'
              className='flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'
            >
              <Gitlab className='w-4 h-4 mr-2' />
              gitlab.com/kei0528
            </a>
            <a
              target='_blank'
              href='https://maps.app.goo.gl/7o6gW7KqH8GBc6aaA'
              className='flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'
            >
              <MapPin className='w-4 h-4 mr-2' />
              Tyringe, Sweden
            </a>
          </div>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <h3 className='font-semibold mb-2'>Technical Skills</h3>
            <div className='flex flex-wrap gap-2'>
              <Badge>HTML / CSS / SASS / Tailwind CSS</Badge>
              <Badge>JavaScript / TypeScript / Node.js</Badge>
              <Badge>React / Next.js</Badge>
              <Badge>Express / Hono</Badge>
              <Badge>NoSQL (Firebase)</Badge>
              <Badge>SQL (PostgreSQL)</Badge>
              <Badge>Jest</Badge>
              <Badge>Git</Badge>
              <Badge>Figma</Badge>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Languages</h3>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='secondary'>Japanese (Native)</Badge>
                <Badge variant='secondary'>German (Fluent)</Badge>
                <Badge variant='secondary'>English (Intermediate)</Badge>
                <Badge variant='secondary'>Swedish (Beginner)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Work Experience</CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div>
              <h3 className='font-semibold'>Web Developer</h3>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>Octily GmbH | 2021 - Present</p>
              <ul className='list-disc list-outside pl-4 mt-2 space-y-1'>
                <li>Led the development of the CMS application used by over 50,000 daily users</li>
                <li>Mentored junior developers and conducted code reviews to ensure high code quality</li>
                <li>
                  Managed and developed multiple small to medium-sized web applications using TypeScript and React.
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold'>Full Stack Developer</h3>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>Freelance | 2020 - 2024</p>
              <ul className='list-disc list-outside pl-4 mt-2 space-y-1'>
                <li>
                  Developed B2B web applications, incorporating AI integrations and high-performance backend systems
                  using Bun/Hono, hosted on Cloudflare Workers.
                </li>
                <li>Maintained large-scale web applications with legacy tech stacks</li>
                <li>Designed and built websites for local businesses, enhancing their digital presence.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
