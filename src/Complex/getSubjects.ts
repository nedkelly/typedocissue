import { Article, Thing } from 'schema-dts';

export default function getSubjects(articleContent: Article) {
  if (!articleContent) {
    return [];
  }

  const { about } = articleContent;

  if (!about) {
    return [];
  }

  return (about as (Thing & {
    name: string;
    disambiguatingDescription: string;
  })[]).filter(aboutItem => aboutItem.disambiguatingDescription === 'Subject');
}
