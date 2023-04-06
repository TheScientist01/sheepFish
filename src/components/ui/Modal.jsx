import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiX } from "react-icons/fi";

export default function Modal({ isOpen, setIsOpen, title, children, size }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full justify-center items-start py-16">
            <Transition.Child
              as={Fragment}
              enter="duration-300"
              enterFrom="opacity-0 -translate-y-8"
              enterTo="opacity-100 translate-y-0"
              leave="duration-300"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-8"
            >
              <Dialog.Panel
                className={`bg-white dark:bg-dark-200 shadow-card shadow-black/20 rounded-xl ${
                  size === "sm"
                    ? "xs:w-[450px]"
                    : size === "md"
                    ? "md:w-[750px]"
                    : size === "lg"
                    ? "lg:w-[900px]"
                    : "sm:w-[600px]"
                }`}
              >
                {title && (
                  <div className="flex justify-between items-center p-4 border-b border-common">
                    <Dialog.Title className="text-lg">{title}</Dialog.Title>
                    <button onClick={() => setIsOpen(false)} className="rounded">
                      <FiX className="text-xl" />
                    </button>
                  </div>
                )}

                <div className="p-4">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
