/**
 * Loading skeleton for form submissions
 */
export default function FormSkeleton() {
  return (
    <div className="space-y-4 p-stack-lg">
      {/* Title skeleton */}
      <div className="h-8 bg-luxe-light rounded-lg w-1/3 animate-pulse"></div>
      
      {/* Form field skeletons */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-5 bg-luxe-light rounded w-1/4 animate-pulse"></div>
          <div className="h-10 bg-luxe-light rounded-lg animate-pulse"></div>
        </div>
      ))}
      
      {/* Button skeleton */}
      <div className="h-12 bg-luxe-black rounded-lg w-full animate-pulse mt-stack-md"></div>
    </div>
  )
}
