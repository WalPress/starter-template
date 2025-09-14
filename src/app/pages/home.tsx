import PageLayout from "../layout";
import availablePages from '../../available-pages.json';

const HomePage = () => {
    
    return (
        <PageLayout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Welcome to Our Application</h1>
                
                <div className="mb-8">
                    <div className="grid gap-4">
                        {availablePages.map((page, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-medium text-blue-600 mb-2">
                                    <a href={page.path} className="hover:underline">
                                        {page.name}
                                    </a>
                                </h3>
                                <p className="text-gray-600">{page.description}</p>
                                <div className="mt-2">
                                    <span className="text-sm text-gray-500">Path: {page.path}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </PageLayout>
    )
}

export default HomePage;