export interface PreviousRookie {
  id: string
  name: string
  city: string
  studies: string
  school: string
  month: string
  year: number
  imageSrc?: string
}

export const previousRookies: PreviousRookie[] = [
  {
    id: '1',
    name: 'Arvid Eriksson',
    city: 'STOCKHOLM',
    studies: 'Master of Computer Science',
    school: 'Kungliga Tekniska Högskolan',
    month: 'november',
    year: 2024,
    imageSrc:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Nils Dahl',
    city: 'UPPSALA',
    studies: 'Ekonomie kandidatprogram',
    school: 'Uppsala universitet',
    month: 'oktober',
    year: 2024,
    imageSrc:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Elias Åberg Garcia',
    city: 'LUND',
    studies: 'Civilingenjör i teknisk fysik',
    school: 'Lunds universitet',
    month: 'september',
    year: 2024,
    imageSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Emma Lindström',
    city: 'GÖTEBORG',
    studies: 'Civilingenjör i datateknik',
    school: 'Chalmers tekniska högskola',
    month: 'augusti',
    year: 2024,
    imageSrc:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    name: 'Oliver Andersson',
    city: 'MALMÖ',
    studies: 'Industriell ekonomi',
    school: 'Lunds universitet',
    month: 'juli',
    year: 2024,
    imageSrc:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    name: 'Sofia Bergman',
    city: 'LINKÖPING',
    studies: 'Civilingenjör i mjukvaruteknik',
    school: 'Linköpings universitet',
    month: 'juni',
    year: 2024,
    imageSrc:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80',
  },
]
