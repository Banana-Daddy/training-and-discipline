// 21st.dev component cache — for HANDOFF MODE / React rebuild reference
// Query: "team grid editorial portraits"
// Component: Team (TeamSection)
// Date: 2026-04-28
// Used in: T&D Both Directions — trainer grid w/ horizontal rule above, role label, name beneath
// What we borrowed: section heading at top, "Leadership" / "Engineering" / "Marketing" subhead pattern (becomes "Owner" / "Strength & Conditioning" / "Yoga & Strength" / "Lifestyle Programming" tag rows), top-border on each row, 4-up grid, name + role + photo
// Translation notes: dropped circular avatars in favor of full-bleed rectangular portraits (matches the brand's posed-headshot photography); swapped role labels to subway-style route bullets that color-code each trainer's specialty

const members = [
    { name: 'Méschac Irung', role: 'Creator', avatar: '...' },
    { name: 'Théo Balick', role: 'Frontend Dev', avatar: '...' },
    { name: 'Glodie Lukose', role: 'Frontend Dev', avatar: '...' },
    { name: 'Bernard Ngandu', role: 'Backend Dev', avatar: '...' },
]

export default function TeamSection() {
    return (
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Our team</h2>
                <div>
                    <h3 className="mb-6 text-lg font-medium">Leadership</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
