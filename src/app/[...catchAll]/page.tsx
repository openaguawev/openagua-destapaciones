import { redirect } from 'next/navigation';

export default function CatchAll() {
  // Utilizing default router logic to force all unkown URLs back to the root namespace.
  redirect('/');
}
