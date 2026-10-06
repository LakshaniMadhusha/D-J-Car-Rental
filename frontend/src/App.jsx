import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import BookingSummaryPage from "./pages/BookingSummaryPage";
import PaymentPage from "./pages/PaymentPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import AIAssistantPage from "./pages/AIAssistantPage";
import IDVerificationPage from "./pages/IDVerificationPage";
import LiveChatPage from "./pages/LiveChatPage";
import CancellationPolicyPage from "./pages/CancellationPolicyPage";
import LoyaltyPage from "./pages/LoyaltyPage";

import ProtectedRoute from "./components/ProtectedRoute";
import AppShell from "./components/AppShell";

function PrivatePage({ children }) {
  return (
    <ProtectedRoute>
      <AppShell>
        {children}
      </AppShell>
    </ProtectedRoute>
  );
}

export default function App() {

  return (

    <Routes>

      {/* LOGIN / REGISTER */}
      <Route
        path="/"
        element={<AuthPage />}
      />


      {/* HOME */}
      <Route
        path="/home"
        element={
          <PrivatePage>
            <HomePage />
          </PrivatePage>
        }
      />


      {/* SEARCH RESULTS */}
      <Route
        path="/cars"
        element={
          <PrivatePage>
            <SearchResultsPage />
          </PrivatePage>
        }
      />


      {/* CAR DETAILS */}
      <Route
        path="/cars/:id"
        element={
          <PrivatePage>
            <CarDetailsPage />
          </PrivatePage>
        }
      />


      {/* BOOKING SUMMARY */}
      <Route
        path="/booking-summary"
        element={
          <PrivatePage>
            <BookingSummaryPage />
          </PrivatePage>
        }
      />


      {/* PAYMENT */}
      <Route
        path="/payment"
        element={
          <PrivatePage>
            <PaymentPage />
          </PrivatePage>
        }
      />


      {/* BOOKINGS */}
      <Route
        path="/bookings"
        element={
          <PrivatePage>
            <MyBookingsPage />
          </PrivatePage>
        }
      />


      {/* AI */}
      <Route
        path="/assistant"
        element={
          <PrivatePage>
            <AIAssistantPage />
          </PrivatePage>
        }
      />


      {/* VERIFICATION */}
      <Route
        path="/verification"
        element={
          <PrivatePage>
            <IDVerificationPage />
          </PrivatePage>
        }
      />


      {/* LIVE CHAT */}
      <Route
        path="/chat"
        element={
          <PrivatePage>
            <LiveChatPage />
          </PrivatePage>
        }
      />


      {/* POLICY */}
      <Route
        path="/cancellation-policy"
        element={
          <PrivatePage>
            <CancellationPolicyPage />
          </PrivatePage>
        }
      />


      {/* LOYALTY */}
      <Route
        path="/loyalty"
        element={
          <PrivatePage>
            <LoyaltyPage />
          </PrivatePage>
        }
      />


      {/* OLD DASHBOARD URL */}
      <Route
        path="/dashboard"
        element={
          <Navigate
            to="/home"
            replace
          />
        }
      />


      <Route
        path="*"
        element={
          <Navigate
            to="/home"
            replace
          />
        }
      />

    </Routes>

  );
}