import { Star } from 'lucide-react';

interface Feedback {
  id: string;
  ticketId: string;
  customer: string;
  rating: number;
  comment: string;
  submittedDate: string;
  engineer: string;
  ticketTitle: string;
}

const feedbacks: Feedback[] = [
  {
    id: 'FB-501',
    ticketId: 'TCK-2404',
    customer: 'Metro Services',
    rating: 5,
    comment: 'Excellent service! Michael was very professional and resolved the issue quickly. The email setup is working perfectly.',
    submittedDate: 'Dec 20, 2024',
    engineer: 'Michael Brown',
    ticketTitle: 'Email Configuration',
  },
  {
    id: 'FB-502',
    ticketId: 'TCK-2406',
    customer: 'Innovate Ltd',
    rating: 5,
    comment: 'Great job! The monitor was replaced promptly and everything is working as expected.',
    submittedDate: 'Dec 15, 2024',
    engineer: 'James Wilson',
    ticketTitle: 'Monitor Replacement',
  },
  {
    id: 'FB-503',
    ticketId: 'TCK-2398',
    customer: 'Tech Solutions Inc',
    rating: 4,
    comment: 'Good service overall. The maintenance was completed on time, though communication could be improved.',
    submittedDate: 'Dec 18, 2024',
    engineer: 'David Chen',
    ticketTitle: 'Server Maintenance',
  },
  {
    id: 'FB-504',
    ticketId: 'TCK-2395',
    customer: 'Digital Dynamics',
    rating: 5,
    comment: 'Outstanding support! Sarah went above and beyond to ensure our network issues were completely resolved.',
    submittedDate: 'Dec 17, 2024',
    engineer: 'Sarah Mitchell',
    ticketTitle: 'Network Configuration',
  },
  {
    id: 'FB-505',
    ticketId: 'TCK-2392',
    customer: 'Global Enterprises',
    rating: 3,
    comment: 'The issue was resolved but it took longer than expected. Would appreciate faster response times.',
    submittedDate: 'Dec 14, 2024',
    engineer: 'Emily Rodriguez',
    ticketTitle: 'Software Update',
  },
  {
    id: 'FB-506',
    ticketId: 'TCK-2388',
    customer: 'Cloud Systems',
    rating: 5,
    comment: 'Fantastic work! Very knowledgeable engineer who explained everything clearly.',
    submittedDate: 'Dec 12, 2024',
    engineer: 'David Chen',
    ticketTitle: 'Hardware Upgrade',
  },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? 'fill-[#007AFF] text-[#007AFF]'
              : 'text-gray-300'
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function FeedbackView() {
  const averageRating = (
    feedbacks.reduce((sum, fb) => sum + fb.rating, 0) / feedbacks.length
  ).toFixed(1);

  const getRatingCount = (rating: number) =>
    feedbacks.filter((fb) => fb.rating === rating).length;

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-black mb-1">Customer Feedback</h1>
        <p className="text-gray-600">
          View customer satisfaction ratings and comments
        </p>
      </div>

      {/* Feedback Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-gray-600 mb-2">Total Feedback</div>
          <div className="text-3xl text-black">{feedbacks.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-gray-600 mb-2">Average Rating</div>
          <div className="flex items-center gap-2">
            <div className="text-3xl text-black">{averageRating}</div>
            <Star className="w-6 h-6 fill-[#007AFF] text-[#007AFF]" strokeWidth={1.5} />
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-gray-600 mb-2">5-Star Ratings</div>
          <div className="text-3xl text-green-600">{getRatingCount(5)}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-gray-600 mb-2">Satisfaction Rate</div>
          <div className="text-3xl text-[#007AFF]">
            {Math.round((getRatingCount(5) / feedbacks.length) * 100)}%
          </div>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="text-black mb-4">Rating Distribution</h3>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = getRatingCount(rating);
            const percentage = (count / feedbacks.length) * 100;
            return (
              <div key={rating} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-20">
                  <span className="text-gray-700">{rating}</span>
                  <Star className="w-4 h-4 fill-gray-400 text-gray-400" strokeWidth={1.5} />
                </div>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#007AFF] h-full rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="text-gray-600 w-16 text-right">{count} ({Math.round(percentage)}%)</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        <h3 className="text-black mb-4">Recent Feedback</h3>
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <RatingStars rating={feedback.rating} />
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">{feedback.submittedDate}</span>
                </div>
                <div className="text-gray-900 mb-1">{feedback.customer}</div>
                <div className="text-gray-600">
                  Ticket: <span className="text-[#007AFF]">{feedback.ticketId}</span> - {feedback.ticketTitle}
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-600 mb-1">Handled by</div>
                <div className="text-gray-900">{feedback.engineer}</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">{feedback.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
