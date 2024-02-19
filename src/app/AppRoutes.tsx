import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoaderFullScreen from "../shared/components/LoaderFullScreen";

const AuthModule = React.lazy(() => import("../modules/auth/Auth.module"));

const MessagingModule = React.lazy(
  () => import("../modules/messaging/Messaging.module")
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoaderFullScreen />}>
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/messaging" element={<MessagingModule />} />
      </Routes>
    </Suspense>
  );
}
