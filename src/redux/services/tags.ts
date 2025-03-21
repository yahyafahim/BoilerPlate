export const expenseTags = {
  EXPENSES: 'EXPENSES',
};

export const tagTypes = (): string[] =>
  [...Object.values(expenseTags)] as string[];
