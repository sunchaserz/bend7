import { defineCollection, z } from 'astro:content';

const routes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    category: z.enum(['iconic-climbs', 'loop-rides', 'easy-rides', 'gravel']),
    difficulty: z.enum(['easy', 'moderate', 'hard', 'extreme']),
    distance_km: z.number(),
    elevation_m: z.number(),
    avg_gradient: z.number(),
    max_gradient: z.number(),
    start_location: z.string(),
    summit_altitude: z.number().optional(),
    tour_de_france: z.boolean().default(false),
    gpx_file: z.string().optional(),
    hero_image: z.string().optional(),
    water_stops: z.array(z.string()).default([]),
    best_months: z.array(z.string()).default([]),
    insider_tip: z.string().optional(),
    published: z.boolean().default(true),
    date: z.date().optional(),
  }),
});

export const collections = { routes };
