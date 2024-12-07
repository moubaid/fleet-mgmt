import { router } from '../trpc';
import { vehicleRouter } from './vehicle';

export const appRouter = router({
  vehicle: vehicleRouter,
});

export type AppRouter = typeof appRouter;