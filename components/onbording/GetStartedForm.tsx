import { motion } from "framer-motion";
import CommonButton from "../common/Button";

interface GetStartedFormProps {
  setPhone: (value: string) => void;
  phone: string;
  agreed1: boolean;
  setAgreed1: (value: boolean) => void;
  agreed2: boolean;
  setAgreed2: (value: boolean) => void;
  setShowOTP: (value: boolean) => void;
}
export default function GetStartedForm({
  setPhone,
  phone,
  agreed1,
  setAgreed1,
  agreed2,
  setAgreed2,
  setShowOTP,
}: GetStartedFormProps) {
  return (
    <motion.div
      key="form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl p-8 rounded-3xl border border-(--color-btn-teritary-200) flex flex-col justify-center bg-(--color-bg-neutral-50)"
    >
      <h2 className="text-3xl font-semibold text-(--color-text-primary) mb-3 text-left">
        Let’s get started
      </h2>
      <p className="text-sm text-(--color-text-primary) mb-8 text-left">
        Enter your phone number to continue. We’ll send you a verification code.
      </p>

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          setShowOTP(true);
        }}
      >
        <div>
          <label
            htmlFor="phone"
            className="block text-base font-medium text-(--color-text-primary) mb-2"
          >
            Phone number
          </label>

          <div className="flex items-center border border-(--color-btn-teritary-200) rounded-xl focus-within:border-(--color-line-blue-200)">
            <span className="flex items-center pl-4 pr-3 text-(--color-text-muted) text-base font-medium">
              +1
            </span>
            <div className="h-6 w-px bg-(--color-btn-teritary-200)"></div>
            <input
              type="tel"
              id="phone"
              placeholder="000 000 0000"
              className="w-full p-4 text-(--color-text-primary) bg-transparent focus:outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-3 py-3">
          <label className="flex items-start space-x-2 text-sm text-(--color-text-secondary)">
            <input
              type="checkbox"
              checked={agreed1}
              onChange={() => setAgreed1(!agreed1)}
              className="mt-0.5"
            />
            <span>
              I agree to receive Workly updates and notifications via SMS or
              WhatsApp.
            </span>
          </label>

          <label className="flex items-start space-x-2 text-sm text-(--color-text-secondary)">
            <input
              type="checkbox"
              checked={agreed2}
              onChange={() => setAgreed2(!agreed2)}
              className="mt-0.5"
            />
            <span>
              I accept the{" "}
              <a href="#" className="text-(--color-text-primary) underline">
                Terms and Conditions
              </a>
              , and Privacy Policy.
            </span>
          </label>
        </div>

        <CommonButton
          //   onClick={handleAddClick}
          variant="primary"
          type="submit"
          //   icon={<Plus />}
          className="w-full py-4 rounded-xl font-semibold"
        >
          Get Started
        </CommonButton>
        <div className="flex items-center justify-center space-x-2 text-sm text-(--color-text-primary) mt-2">
          Do you have an account?{" "}
          <span className="text-(--color-btn-primary-500) hover:text-(--color-btn-primary-600) font-semibold pl-2 cursor-pointer">
            Signin
          </span>
        </div>
      </form>
    </motion.div>
  );
}
