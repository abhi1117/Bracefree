import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CommonButton from "../common/Button";

interface OtpFormProps {
  phone: string;
  otp: string[];
  handleOtpChange: (index: number, value: string) => void;
}
export default function OtpForm({ phone, otp, handleOtpChange }: OtpFormProps) {
  const router = useRouter();
  return (
    <motion.div
      key="otp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl p-8 rounded-3xl border border-(--color-btn-teritary-200) flex flex-col justify-center bg-(--color-bg-neutral-50)"
    >
      <h2 className="text-2xl font-semibold text-text-(--color-text-primary) mb-2">
        Enter verification code
      </h2>
      <p className="text-sm text-(--color-text-primary) mb-10">
        We’ve sent a 4-digit code to +1 ({phone || "635 612 300"})
      </p>

      {/* OTP Input Boxes */}
      <div className="flex justify-center space-x-4 mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            className="w-12 h-12 text-center border border-(--color-btn-teritary-200) rounded-xl text-lg font-medium text-(--color-text-primary) focus:outline-none focus:border-(--color-line-blue-200) hover:cursor-pointer"
          />
        ))}
      </div>

      <button
        onClick={() => alert("OTP Resent")}
        className="text-(--color-btn-primary-500) font-medium text-sm mb-6 hover:underline cursor-pointer"
      >
        Resend OTP
      </button>

      <p className="text-(--color-text-secondary) text-sm mb-6">
        Make sure you enter the correct code. You have 3 attempts remaining.
      </p>

      {/* ✅ Route to personaldetails */}
      <CommonButton
        onClick={() => router.push("/profile-details")}
        variant="primary"
        type="submit"
        className="w-full py-4 rounded-xl font-semibold"
        //   icon={<Plus />}
      >
        Verify & Continue
      </CommonButton>
    </motion.div>
  );
}
