// utils/helpers.ts
export async function confirmDialog(page) {
  await page.getByRole('button', { name: 'BƏLİ' }).click();
}
