import { certificates } from "./portalData";

type CertificateStatus = "valid" | "expiring" | "expired";

type Certificate = {
  id: string;
  name: string;
  status: CertificateStatus;
  supplier: string;
  issuedDate: string;
  expiryDate: string;
};

const statusConfig: Record<CertificateStatus, { label: string; className: string; icon: string }> = {
  valid:    { label: "Valid",     className: "badge--green",  icon: "fa-circle-check"   },
  expiring: { label: "Expiring",  className: "badge--amber",  icon: "fa-clock"          },
  expired:  { label: "Expired",   className: "badge--red",    icon: "fa-circle-xmark"   },
};

export default function CertificatesPanel() {
  return (
    // CHANGED: Added max container widths, safety paddings, and standard layout settings
    <section className="portal-certs w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      
      {/* Header */}
      <div className="portal-certs__header mb-6 text-left">
        <h2 className="portal-section-title text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Certificates</h2>
        <p className="portal-section-sub text-sm text-slate-500 mt-1">Download your quality certificates</p>
      </div>

      {/* List Container */}
      {/* CHANGED: Fluid step responsive layout wrapper maps density dynamically (1 -> 2 -> 3 columns) */}
      <div className="portal-certs__list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {(certificates as Certificate[]).map((cert) => {
          const config = statusConfig[cert.status];
          return (
            /* Card Frame */
            /* CHANGED: Added flex settings so internal contents stack cleanly on different device viewports */
            <div key={cert.id} className="cert-card bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-6 text-left">
              
              <div className="flex items-start gap-4 w-full">
                {/* Left Badge Icon */}
                <div className="cert-card__icon p-3 bg-blue-50 text-blue-600 rounded-lg flex-shrink-0 hidden sm:block">
                  <i className="fas fa-certificate text-lg" />
                </div>
                
                {/* Content Elements Block */}
                <div className="cert-card__body flex-grow space-y-3 w-full overflow-hidden">
                  
                  {/* Title & Badge Alignment Frame */}
                  {/* CHANGED: Items flow cleanly to a column alignment on ultra-small device monitors */}
                  <div className="cert-card__top flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="cert-card__name font-bold text-slate-900 text-base sm:text-lg truncate tracking-tight">{cert.name}</h3>
                    <span className={`badge inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md border w-fit ${config.className}`}>
                      <i className={`fas ${config.icon}`} />
                      {config.label}
                    </span>
                  </div>
                  
                  {/* Supplier Info metadata */}
                  <p className="cert-card__supplier text-xs sm:text-sm text-slate-600 flex items-center gap-2">
                    <i className="fas fa-industry text-slate-400 w-4 flex-shrink-0" /> 
                    <span className="truncate">{cert.supplier}</span>
                  </p>
                  
                  {/* Date Meta Row */}
                  {/* CHANGED: Split timestamp text links align stack-wise on tight portrait spaces */}
                  <div className="cert-card__dates flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-2 border-t border-slate-100 text-[11px] sm:text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-calendar-plus text-slate-400 w-3.5 flex-shrink-0" /> Issued: {cert.issuedDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-calendar-xmark text-slate-400 w-3.5 flex-shrink-0" /> Expires: {cert.expiryDate}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Action Button Strip */}
              {/* CHANGED: Full width blocks make standard thumb actions effortless to control on mobile devices */}
              <button
                className={`cert-download-btn w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all border ${
                  cert.status === "expired" 
                    ? "cert-download-btn--disabled bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed" 
                    : "bg-blue-600 hover:bg-blue-700 text-white border-transparent active:scale-[0.99]"
                }`}
                disabled={cert.status === "expired"}
              >
                <i className="fas fa-download text-xs" />
                Download
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}