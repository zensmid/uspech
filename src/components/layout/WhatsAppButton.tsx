import { whatsappNumero } from "@/content/home";

export function WhatsAppButton({
  mensaje = "Hola, vengo de la página web de Uspech y quiero más información.",
}: {
  mensaje?: string;
}) {
  const href = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7">
        <path d="M16.004 3C9.374 3 4 8.374 4 15.004c0 2.37.692 4.58 1.886 6.44L4 29l7.73-1.86a11.9 11.9 0 0 0 4.274.78h.003c6.63 0 12.004-5.374 12.004-12.004C28.01 8.374 22.636 3 16.004 3Zm0 21.79h-.002a9.73 9.73 0 0 1-4.957-1.36l-.355-.21-3.676.885.98-3.584-.232-.368a9.74 9.74 0 0 1-1.49-5.15c0-5.39 4.386-9.776 9.782-9.776 2.613 0 5.07 1.019 6.915 2.866a9.71 9.71 0 0 1 2.866 6.912c0 5.39-4.386 9.776-9.83 9.776Zm5.6-7.33c-.306-.153-1.81-.893-2.09-.994-.28-.102-.485-.153-.69.153-.204.306-.79.994-.969 1.198-.178.204-.357.23-.663.077-.306-.153-1.292-.476-2.462-1.52-.91-.81-1.52-1.81-1.698-2.117-.179-.306-.02-.47.153-.638.153-.153.357-.4.536-.6.179-.2.238-.342.357-.571.119-.23.06-.42-.03-.571-.09-.153-.76-1.835-1.04-2.52-.28-.685-.56-.59-.77-.6-.2-.01-.433-.012-.663-.012-.23 0-.6.085-.918.42-.32.333-1.21 1.18-1.21 2.88 0 1.7 1.238 3.35 1.41 3.58.17.23 2.355 3.6 5.713 4.91 2.846 1.11 2.846.74 3.364.69.52-.05 1.68-.69 1.918-1.35.238-.665.238-1.23.166-1.35-.07-.12-.26-.19-.566-.34Z" />
      </svg>
    </a>
  );
}
