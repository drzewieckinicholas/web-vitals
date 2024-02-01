import { ReportCallback } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals/attribution').then(
      ({ onCLS, onFCP, onFID, onINP, onLCP, onTTFB }) => {
        onCLS(onPerfEntry, {
          reportAllChanges: true,
        });
        onFCP(onPerfEntry);
        onFID(onPerfEntry);
        onINP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
      },
    );
  }
};

export default reportWebVitals;
