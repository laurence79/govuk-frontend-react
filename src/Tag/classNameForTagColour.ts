import { TagProps } from './Tag.types';

export const classNameForTagColour = (
  colour: TagProps['colour'] | undefined
): string | null => {
  return colour ? `${colour.toLowerCase()}-tag` : null;
};
