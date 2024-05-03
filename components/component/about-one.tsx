import Link from "next/link"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { curve, heroBackground, robot } from "@/public/assets";
import Image from "next/image";

export function AboutOne() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex items-center justify-center container px-4 md:px-6">
            <Carousel className="w-full max-w-6xl">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt=""
                    className="aspect-[2/1] object-cover rounded-xl"
                    height={600}
                    src={robot}
                    width={1200}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt=""
                    className="aspect-[2/1] object-cover rounded-xl"
                    height={600}
                    src={heroBackground}
                    width={1200}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt=""
                    className="aspect-[2/1] object-cover rounded-xl"
                    height={600}
                    src={robot}
                    width={1200}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-n-7 rounded-3xl">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Crafting Exceptional Digital Experiences
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  From branding and web design to digital marketing and custom software development, our team of experts
                  delivers tailored solutions to help your business thrive.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Branding</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Crafting memorable brand identities that resonate with your audience.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Web Design</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Designing visually stunning and user-friendly websites.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Digital Marketing</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Driving targeted traffic and increasing online visibility.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Software Development</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Building custom software solutions to meet your unique needs.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                alt="Services"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height={550}
                src="/placeholder.svg"
                width={550}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Team"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height={550}
                src="/placeholder.svg"
                width={550}
              />
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Passionate Experts Dedicated to Your Success
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our talented team of designers, developers, and strategists collaborate to deliver exceptional results
                  for our clients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-gray-500 dark:text-gray-400">Creative Director</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Jane Smith</h3>
                    <p className="text-gray-500 dark:text-gray-400">Lead Designer</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Bob Johnson</h3>
                    <p className="text-gray-500 dark:text-gray-400">Senior Developer</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Sarah Lee</h3>
                    <p className="text-gray-500 dark:text-gray-400">Marketing Strategist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-n-7 rounded-xl">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                  Client Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Hear What Our Clients Say
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our clients love working with us and we&lsquo;re proud to share their kind words.
                </p>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                    <div className="flex items-start">
                      <Image
                        alt="Client"
                        className="h-12 w-12 rounded-full"
                        height={48}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "48/48",
                          objectFit: "cover",
                        }}
                        width={48}
                      />
                      <div className="ml-4 space-y-1">
                        <h4 className="text-lg font-semibold">Jane Doe</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">CEO, Acme Inc</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                    &quot;The team at Acme Agency has been an absolute pleasure to work with. They truly understand our
                      brand and have delivered exceptional results.&quot;
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                    <div className="flex items-start">
                      <Image
                        alt="Client"
                        className="h-12 w-12 rounded-full"
                        height={48}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "48/48",
                          objectFit: "cover",
                        }}
                        width={48}
                      />
                      <div className="ml-4 space-y-1">
                        <h4 className="text-lg font-semibold">John Smith</h4>
                        <p className="text-gray-500 dark:text-gray-400  text-lg">CMO, Globex Corp</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                    &quot;Acme Agency has been a true partner in helping us achieve our digital marketing goals. Their team
                      is knowledgeable, responsive, and always goes the extra mile.&quot;
                    </p>
                  </div>
                </div>
              </div>
              <Image
                alt="Testimonials"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height={550}
                src="/placeholder.svg"
                width={550}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Filtrate. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
