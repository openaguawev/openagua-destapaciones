import { handleLegacyRedirect } from '@/utils/legacyRedirect';

export default async function CatchAll({ params }: { params: Promise<{ catchAll: string[] }> }) {
  const { catchAll } = await params;
  handleLegacyRedirect(catchAll);
}
