---
layout: default
title: Vacantes
---

<main>
  <div class="bg-skin-alternate">
    <div class="py-16 mx-auto max-w-7xl px-4 sm:py-24 sm:px-6 lg:py-32">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-skin-alternate-2 sm:text-5xl md:text-6xl">
          <span class="block">Ayúdanos a construir la mejor plataforma</span>
          <span class="block text-skin-accented mt-3">de gestión de créditos y motor bancario</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-skin-muted sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">En Creditario estamos desarrollando la plataforma para que empresas Fintech puedan acelerar el desarrollo de productos modernos y novedosos para sus clientes.</p>
        <p class="mt-3 max-w-md mx-auto text-base text-skin-muted sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Es por esto que nos mantenemos en la búsqueda constante de personas con talento y actitud que quieran sumarse a nuestro equipo para ayudarnos a lograr los objetivos y la visión que nos trazamos.</p>
      </div>
    </div>
  </div>

  <div class="divide-y divide-skin-alternate-2">
    <% collections.jobs.resources.each do |job| %>
      <% if job.status == "Abierta" %>
        <section class="bg-white">
          <div class="max-w-2xl px-6 mx-auto lg:max-w-6xl">
            <sidebar class="py-12 grid lg:grid-cols-3 lg:gap-16">
              <%= render "job_sidebar", job: job %>

              <div class="col-span-2 space-y-12">
                <div class="space-y-8">
                  <div class="space-y-2">
                    <h1 class="text-3xl font-bold text-skin-accented leading-9 sm:text-4xl sm:leading-10"><%= job.title %></h1>
                    <p class="text-lg text-skin-muted leading-7"><%= job.description %></p>
                  </div>
                </div>

                <%= render "job_sidebar_mobile", job: job %>

                <div class="prose">
                  <%= job.content %>

                  <% if job.status == "Abierta" %>
                    <h2>¿Cómo aplicar?</h2>
                    <p>Envía tu curriculum acompañado de una breve presentación a la dirección de correo electrónico <a class="font-semibold hover:underline" href="mailto:empleo@creditar.io?subject=<%= job.title %>">empleo@aoorora.com</a></p>
                  <% end %>
                </div>
              </div>
            </sidebar>
          </div>
        </section>
      <% end %>
    <% end %>
  </div>

</main>
