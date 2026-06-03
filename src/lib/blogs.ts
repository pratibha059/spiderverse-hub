export interface Blog {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  images: string[];
  readTime: string;
}

export const MOCK_BLOGS: Blog[] = [
  {
    id: "future-of-ai-coding",
    title: "Spider-Man: Spreading Across the Multiverse Comic Era",
    summary: "A deep dive into how Spider-Man's character design evolved from 1962 Ditko sketchbooks into multi-dimensional comic series.",
    content: "The evolution of Spider-Man in comics represents a fascinating journey. Debuting in Amazing Fantasy #15, Peter Parker broke the mold of teen characters by becoming a full-fledged lead superhero, rather than a sidekick. Over the decades, artists like Steve Ditko, John Romita Sr., and Todd McFarlane have re-imagined the wall-crawler's web shapes, eye sizes, and dynamic swinging poses, culminating in the multiverse versions of Earth-616, Earth-1610, and Earth-65.",
    date: "May 28, 2026",
    author: "Gavin Grayson",
    tags: ["Comics", "Spider-Man", "History"],
    images: ["/images/tech_blog_1.png", "/images/tech_blog_2.png"],
    readTime: "5 min read"
  },
  {
    id: "norwegian-fjords-adventure",
    title: "A Tour of Brooklyn's Iconic SpiderVerse Locations",
    summary: "Exploring the real-world Brooklyn neighborhoods featured in Miles Morales' animated cinematic adventure.",
    content: "Navigating through Miles Morales' Brooklyn feels like stepping into a living, breathing canvas of spray paint and neon lights. From the brick buildings of Chelsea and the busy streets of Downtown Brooklyn to the stunning views of the Manhattan skyline from the roof of his boarding school, the SpiderVerse movies pay homage to the rich cultural collage of New York City. The animators combined hand-drawn comic textures with digital environments to capture the heartbeat of Brooklyn.",
    date: "May 25, 2026",
    author: "Miles Parker",
    tags: ["Movies", "Spider-Man", "Brooklyn"],
    images: ["/images/travel_blog_1.png", "/images/travel_blog_2.png"],
    readTime: "7 min read"
  },
  {
    id: "minimalist-workspace-guide",
    title: "The Art Behind the Spider-Gwen Comic Design",
    summary: "How colorists and illustrators designed Spider-Gwen's iconic white-pink hood and turquoise drum-beat action panels.",
    content: "Spider-Gwen's visual design is a masterclass in modern comic styling. Artists Robbi Rodriguez and colorist Rico Renzi chose a vibrant color palette consisting of neon pink, turquoise, white, and deep black. Rather than traditional superhero capes, they gave her a loose hood with pink web linings that frames her mask. This design, coupled with musical sound effect graphics on the pages, captures Gwen Stacy's dual identity as a rock drummer and crime-fighter.",
    date: "May 20, 2026",
    author: "Gwen Watson",
    tags: ["Comics", "Spider-Gwen", "Design"],
    images: ["/images/workspace_blog_1.png", "/images/workspace_blog_2.png"],
    readTime: "4 min read"
  },
  {
    id: "beginners-astronomy-guide",
    title: "Movies: Decoding the Animation Styles of the Multiverse",
    summary: "How filmmakers blended halftone dots, watercolor smears, and 3D frames to make the SpiderVerse look like a comic book.",
    content: "The animated SpiderVerse films represent a landmark achievement in cinema. To achieve a comic book look, the production team threw out standard computer-graphics photorealism. Instead, they developed custom rendering pipelines that draw hand-painted textures, ink lines, cross-hatching, and halftone print patterns directly onto the 3D models. Each universe has its own style: Gwen Stacy's Earth-65 resembles dripping mood-ring watercolors, while Spider-Man Noir's world is drawn in gritty black-and-white shadows.",
    date: "May 15, 2026",
    author: "Peter Stacy",
    tags: ["Movies", "Art", "Animation"],
    images: ["/images/astronomy_blog_1.png", "/images/astronomy_blog_2.png"],
    readTime: "6 min read"
  },
  {
    id: "art-of-slow-drip-coffee",
    title: "The Legend of the Web Shooters: Tech & Mechanics",
    summary: "Understanding the chemistry and mechanical engineering behind Peter Parker's web fluid shooters.",
    content: "Peter Parker's web shooters are his most iconic mechanical invention. As a high school chemistry prodigy, he engineered a custom adhesive fluid that is incredibly fluid in pressurized chambers but hardens instantly upon contact with air, forming tensile strands stronger than steel. The wrist-mounted triggers require double-tap palm pressure to prevent accidental web-shooting, and the canisters can be adjusted to shoot webs in lines, nets, or high-velocity web balls.",
    date: "May 10, 2026",
    author: "Otto Stark",
    tags: ["Comics", "Tech", "Gadgets"],
    images: ["/images/coffee_blog_1.png", "/images/coffee_blog_2.png"],
    readTime: "4 min read"
  }
];
