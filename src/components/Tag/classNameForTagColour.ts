import { TagColour } from './Tag.types';

export const classNameForTagColour = (
  colour: TagColour | undefined
): string | null => {
  if (colour === 'dark-blue') return null;
  return colour ? `govuk-tag--${colour}` : null;
};
